export type WikiResponse = {
     query: {
          search: SearchResult[]
     }
}

export  type SearchResult = {
     pageid: number
     title: string
     wordcount: number
     snippet: string
}
