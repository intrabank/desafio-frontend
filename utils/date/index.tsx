import { parse, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDate( dateString: string | undefined = '' ) {
  if(!dateString) {
    return 'que está escrito no seu RG'
  }
  
  const date = parse(dateString, 'yyyy-MM-dd', new Date())

  // const date = new Date(dateString)
  const formattedDate = format(date, "d' de 'MMMM' de 'yyyy", {
    locale: ptBR,})

  return formattedDate
}