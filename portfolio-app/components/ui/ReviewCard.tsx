import { Star } from "lucide-react";

interface ReviewCardProps {
  title: string;
  time: string;
  avaliation: string;
  className?: string;
}
export default function ReviewCard(
    {
  title,
  time,
  avaliation,
  className,
}: ReviewCardProps
) {
  return (
    <div
      className={`flex flex-col bg-white p-4 shadow-xl border-none select-none rounded-xl w-90 h-70 mx-auto hover:shadow-xl/90 hover:shadow-accent transition-shadow duration-300 ${className}`}
    >
      <div className="flex items-start justify-start mt-2 mb-3 gap-2">
        <Star size={30} strokeWidth={1.5} fill="orange" color="orange" />
        <Star size={30} strokeWidth={1.5} fill="orange" color="orange" />
        <Star size={30} strokeWidth={1.5} fill="orange" color="orange" />
        <Star size={30} strokeWidth={1.5} fill="orange" color="orange" />
        <Star size={30} strokeWidth={1.5} fill="orange" color="orange" />
      </div>

      <div className="text-lg font-bold">{title}</div>
      <div className="text-sm font-medium text-gray-700 mb-2">
        {time}
      </div>

      <div className="text-sm text-gray-700 font-medium mt-1 line-clamp-6 ">
        {avaliation}
      </div>
    </div>
  );
}
