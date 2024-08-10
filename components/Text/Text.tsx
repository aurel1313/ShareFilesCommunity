
interface TextProps {
    text: string;
    className?: string;
    color: string;
    fontFamily?: string;
    }
export const Text = ({text,className,color,fontFamily}: TextProps) => {
    return (
        <div>
            <p className={`font-${fontFamily} ${className} text-${color} `}>
                {text}
            </p>
        </div>
    )
}