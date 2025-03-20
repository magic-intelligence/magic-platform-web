import { Button } from '@/presentation/components/ui/buttons';
import { TextInput, SelectMenu } from '@/presentation/components/ui/inputs';
import { LabelInput } from '@/presentation/components/ui/labels/LabelInput';
import { LayoutNewAcount } from '@/presentation/components/new-acount/LayoutNewAcount';
import { Metadata } from 'next';

const roles = [
  {
    value : 'i0cw83u9g8u05e98t0e9y1',
    text: 'Director'
  },
  {
    value : 'i0cw83u9g8u05e98t0e9y2',
    text: 'Coordinador'
  },
  {
    value : 'i0cw83u9g8u05e98t0e9y3',
    text: 'Recursos humanos'
  },
  {
    value : 'i0cw83u9g8u05e98t0e9y4',
    text: 'Servicio al cliente'
  },
  {
    value : 'i0cw83u9g8u05e98t0e9y5',
    text: 'Contenido'
  },
  {
    value : 'i0cw83u9g8u05e98t0e9y6',
    text: 'Miss'
  }
];

export const metadata: Metadata = {
  title: 'Magic|Crear cuenta'
}

export default function () {
  return (
    <LayoutNewAcount title='Alta de usuario' subtitle='Nombre de la sucursal'>
      <div className='w-full'>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <LabelInput
                value='Nombre(s)'/>
              <TextInput
                placeholder='Mark Antony'/>
            </div>
            <div>
              <LabelInput
                value='Apellido paterno'/>
              <TextInput
                placeholder='Muñiz'/>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <LabelInput
                value='Apellido materno'/>
              <TextInput
                placeholder='Rivera'/>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <LabelInput
                value='Roles'/>
              <SelectMenu 
                items={ roles }/>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <LabelInput
                value='Número de teléfono'/>
              <TextInput
                type='tel'
                placeholder='7773940976'/>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <LabelInput
                value='Correo electrónico'/>
              <TextInput
                type='email'
                placeholder='ejemplo@magicintelligence.com'/>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <LabelInput
                value='Contraseña'/>
              <TextInput
                type='password'
                placeholder='MiContraseña{}.},'/>
            </div>
            <div>
              <LabelInput
                value='Confirmar contraseña'/>
              <TextInput
                type='password'
                placeholder='MiContraseña{}.},'/>
            </div>
          </div>
          <div className='mt-4'>
            <Button color='blue'>
              Crear cuenta
            </Button>
          </div>
        </div>
    </LayoutNewAcount>
  )
}
