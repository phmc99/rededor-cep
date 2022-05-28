import { Input } from "../../components/Input";
import { FaSearchLocation } from "react-icons/fa";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CepInterface, InputInterface } from "../../interfaces";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import Button from "../../components/Button";
import { MainContent } from "./style";
import CepResponseBox from "../../components/CepResponseBox";

const HomePage = () => {
  const [cep, setCep] = useState<CepInterface>();
  
  const schema = yup.object().shape({
    cep: yup
      .string()
      .required("CEP não informado")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputInterface>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<InputInterface> = async (data) => {
    data.cep = data.cep.replace("-", "")
    await axios
      .get(`/cep/${data.cep}`)
      .then((response: any) => {
        toast.success("CEP Encontrado!");
        setCep(response.data);
      })
      .catch(({ response }) => {
        const { mensagem } = response.data
        toast.error(mensagem);
      });
  };

  return (
    <MainContent error={errors ? true : false}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          icon={FaSearchLocation}
          placeholder="Insira o CEP"
          register={register("cep")}
          error={errors.cep}
        />
        <span className="error-message">{errors.cep?.message}</span>
        <Button>Buscar</Button>
      </form>
      {
        cep && (<CepResponseBox data={cep}/>)
      }
    </MainContent>
  );
};

export default HomePage;
