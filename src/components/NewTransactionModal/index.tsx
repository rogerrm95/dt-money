// Libs //
import * as Modal from '@radix-ui/react-dialog' // Acessibilidade //
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
// Icons //
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
// Styles //
import {
  Overlay,
  Content,
  CloseButton,
  TransactionType,
  TransactionTypeButton,
} from './styles'

// SCHEMA //
const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['receipt', 'removal']), // enumeração - enum //
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const {
    /* 
    Quando há necessidade de incluir uma informação no formulário que não venha de um elemento nativo
    Utilizamos o "control" do useForm() 
    */
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    console.log(data)
  }

  return (
    <Modal.Portal>
      {/* Portals - Olhar Documentação do React */}
      <Overlay />

      <Content>
        <Modal.Title>Nova Transação</Modal.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição..."
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço..."
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria..."
            required
            {...register('category')}
          />

          {/* Registrando o componente TransactionType */}
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TransactionType
                onValueChange={field.onChange}
                value={field.value}
              >
                <TransactionTypeButton
                  type="button"
                  variant="receipt"
                  value="receipt"
                >
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>

                <TransactionTypeButton
                  type="button"
                  variant="removal"
                  value="removal"
                >
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Modal.Portal>
  )
}
