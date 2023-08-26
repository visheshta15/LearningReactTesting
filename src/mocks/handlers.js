// handle all the http request and respond to a mock response
import { rest } from 'msw'

export const handlers = () => {
    rest.get('https://jsonplaceholder.typicode.com/users', (request, response, context)=>{
        return response(
            context.status(200),
            context.json([
                {
                    name : "Leanne Graham",
                },
                {
                    name: "Ervin Howell"
                },
                {
                    name: "Clementine Bauch"
                }
            ])
        )
        
    })
}
