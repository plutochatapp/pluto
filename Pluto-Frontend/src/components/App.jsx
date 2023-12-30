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
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>
    else {
        return <p>{data.allSamples[0].sampleText}</p>
    }
}

export default App
