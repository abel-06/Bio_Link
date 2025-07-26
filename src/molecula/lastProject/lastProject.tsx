
import imageText from "../../assets/images/Ultimoprojeto.png"

export const LastProject = () =>{

  const textConfig = " font-bold font-belleza text-lightBlue flex center justify-center text-xl"

  return(
    <div className="lastProject w-[40%] bg-darkRoxo rounded-xl">
      <h3 className={`textTop ${textConfig}`}>
        Ultimo
        </h3>

       <a href="https://abel-06.github.io/jogo_da_memoria/" target="_blank">
                <img 
                    className="projectImage rounded-xl w-[90%] flex center justify-center m-auto"
                    src={imageText} alt="Imagem do último projeto"/>
            </a>

      <h3 className={`textBottom ${textConfig}`}>
        Projeto
      </h3>
    </div>
  )
}