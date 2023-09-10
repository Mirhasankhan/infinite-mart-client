import Container from "../../Components/Container/Container";
import categoryName from "../../Components/category";
import CategoryBox from "./CategoryBox";

const Categories = () => {
    const category = categoryName; 
    return (
        <Container>
            <div className="flex gap-8">
                {
                    category.map((c, index) => <CategoryBox key={index} c={c}></CategoryBox>)
                }
            </div>
        </Container>
    );
};

export default Categories;