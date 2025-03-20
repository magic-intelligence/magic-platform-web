import { Metadata } from "next"
import Image from "next/image"
import Logo from "@/presentation/assets/images/MagicLogo.png";
import { IoKey, IoMail } from "react-icons/io5";
import { TextInput } from "@/presentation/components/ui/inputs";
import { LabelInput } from "@/presentation/components/ui/labels";
import { FloatMessage } from "@/presentation/components/ui/messages";
import { Button } from "@/presentation/components/ui/buttons";

export const metadata: Metadata = {
  title: "Login",
  description: "Pagina para loguearse en la App de Magic Intelligence"
}

export default function () {
  return (
    <>
      <FloatMessage
        summary="Mucho cuidado"
        description="Esto podria ser grave"
        type="red"/>

      <div className="flex flex-col lg:flex-row items-center justify-center w-[100%] m-2 lg:m-0 lg:h-[100vh]">
        <div className="lg:w-[50%] text-center flex flex-col justify-center items-center">
          <Image src={Logo} alt="Logo" width={500} height={500} className="min-w-[350px]" />
          <p className="w-full md:w-[500px] min-w[350px] mt-2 mb-4 text-gray-600 font-bold">
            Implementamos un programa de educación para que tu pequeño desarrolle a su
            propio ritmo habilidades naturales, y estas convertirlas en habilidades y actitudes
            positivas para enfrentar los retos con seguridad, forjando sus principios y valores.
          </p>
        </div>
        <div className="flex justify-center w-full lg:w-[50%] mx-2 lg:m-0">
          <form className="lg:w-1/2 sm:min-w-[400px] bg-white shadow-2xl rounded-xl p-6 py-12 space-y-6" action="#" method="POST">
            <h1 className="text-4xl text-gray-700">Inicio de sesión</h1>
            <div className="flex flex-col gap-2">
              <LabelInput
                Icon={IoMail}
                value="Correo electronico" />
              <TextInput
                type="email"
                name="email"
                required={false}
                placeholder="example@magicintelligence.com" />
            </div>

            <div className="flex flex-col gap-2">
              <LabelInput
                Icon={IoKey}
                value="Contraseña"/>
              <TextInput
                type="password"
                name="password"
                autoComplete="current-password"
                required
                placeholder="MiContrseña?'23" />
            </div>
            <hr />
            <div>
              <Button>
                Iniciar
              </Button>
            </div>

            <div className="flex justify-end">
              <a href="#" className="flex font-semibold text-magic-secondary hover:text-blue-500">Recuperar contraseña</a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
