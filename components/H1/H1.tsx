
interface H1Props {
    titre: string;
    className?: string;
    color: string;
    }

export default function H1({ titre,className,color }: H1Props) {
    return (
        //creer couleur de titre qui change le style du titre
        //props color peut utiliser les couleurs de tailwindcss 
        <h1 className={`font-bold ${className} text-${color} `}>
            {titre}
        </h1>
        

       



        
    );
}