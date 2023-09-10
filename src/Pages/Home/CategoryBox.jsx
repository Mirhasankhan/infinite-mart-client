import qs from 'query-string'

import { useNavigate, useSearchParams } from 'react-router-dom'


const CategoryBox = ({ c }) => {
    const [params, setParams] = useSearchParams()

    const navigate = useNavigate()
    const handleClick = () => {
        let currentQuery = {}
        if (params) {
            currentQuery = qs.parse(params.toString())
        }
        const updatedQuery = {
            ...currentQuery,
            category: c,
        }

        const url = qs.stringifyUrl(
            {
                url: '/',
                query: updatedQuery,
            },
            { skipNull: true }
        )

        navigate(url)
    }
    return (
        <div>
            <p onClick={handleClick} className="font-semibold text-xl">{c}</p>
        </div>
    );
};

export default CategoryBox;