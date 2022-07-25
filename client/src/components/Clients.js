import { useQuery } from "@apollo/client";
import  ClientRow  from "./ClientRow";
import { GET_CLIENTS } from "../queries/clientQueries";


export default function Clients() {
    const { loading, error, data } = useQuery(GET_CLIENTS);

    if(loading) return (
        <div className='d-flex justify-content-center'>
            <div className='spinner-border' role='status'>
                <span className='sr-only'></span>
            </div>
        </div>        
    )
    if(error) return <p>Something went wrong!</p>

    return (
        <>
            {!loading && !error && (
                <table className='table table-hover mt-3'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { data.clients.map((client) => (
                            <ClientRow key={client.id} client={client} />
                        )) }
                    </tbody>
                </table>
            )}
        </>
    );
    
}