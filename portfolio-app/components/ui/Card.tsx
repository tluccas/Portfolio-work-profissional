import { LucideProps } from "lucide-react";

interface CardProps {
    Icon: React.ComponentType<LucideProps>;
    title: string;
    description: string;
    number: string;
    className?: string;
}
export default function Card({ Icon, title, description, number, className }: CardProps){
   return (
     <div
       className={`flex flex-col bg-white p-4 shadow-xl/30 border-none rounded-xl w-64 h-94.25 mx-auto hover:shadow-xl/90 hover:shadow-accent transition-shadow duration-300 ${className}`}
     >
       <div className="mb-2">
         {Icon && (
           <Icon size={90} strokeWidth={1} color="var(--action-secondary)" />
         )}
       </div>

       <div className="text-4xl font-extrabold">{number}</div>
       <div className="text-lg font-bold mt-4 mb-2">{title}</div>
       <div className="text-sm text-gray-700 font-medium mt-1">
         {description}
       </div>
     </div>
   ); 
}