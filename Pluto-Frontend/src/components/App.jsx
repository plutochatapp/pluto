import { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client';


const query = gql`
    query MyQuery {
        allSamples {
        sampleText
        }
    }
`;

function App() {
    const { loading, error, data } = useQuery(query);
    useEffect(() => {
        console.log(data);
    })

    return 
}

export default App
