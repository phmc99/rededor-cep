import axios from "axios";

export const findCepApi = async (cep: string) => {
  const { data } = await axios.get(
    `https://ws.apicep.com/cep.json?code=${cep}`
  );

  if (data.ok === true && data.status === 200) {
    return {
      cep: data.code,
      uf: data.state,
      cidade: data.city,
      bairro: data.district,
      logradouro: data.address,
    };
  } else if (!data.ok && data.status === 400) {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (!data.erro) {
      return {
        cep: data.cep,
        uf: data.uf,
        cidade: data.localidade,
        bairro: data.bairro,
        logradouro: data.logradouro,
      };
    }
  }
};
