import { Button } from "./Button";


type CategoryPillsProps = {
    categories : string[]
}

export function CategoryPills ({ categories} : CategoryPillsProps ) {
    return <div className="overflow-x-hidden relative">
        <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
            {categories.map(categories =>(
            <Button 
            key={categories}
            variant= "dark"
            className="py-1 px-3 rounded-lg whitespace-nowrap">{categories}
            </Button>
            ))}
            
        </div>
    </div>;
}