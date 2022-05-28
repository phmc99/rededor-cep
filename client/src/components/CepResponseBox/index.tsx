import { CepInterface } from "../../interfaces"
import { CepContent } from "./style"

interface ComponentInterface {
  data: CepInterface | undefined
}

const CepResponseBox = ({data}: ComponentInterface) => {
  return (
    <CepContent>
      <ul>
        <li><span>CEP:</span><p>{data?.cep}</p></li>
        <li><span>UF:</span><p>{data?.uf}</p></li>
        <li><span>Cidade:</span><p>{data?.cidade}</p></li>
        <li><span>Bairro:</span><p>{data?.bairro}</p></li>
        <li><span>Logradouro:</span><p>{data?.logradouro}</p></li>
      </ul>
    </CepContent>
  )
}

export default CepResponseBox