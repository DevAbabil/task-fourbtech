import { cn } from "@/lib/utils";
import Image from "next/image";

const users = [
  "/assets/avatar-img-1.png",
  "/assets/avatar-img-2.jpg",
  "/assets/avatar-img-3.jpg",
];

const ActiveUsers = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-60 bg-card shadow-sm rounded-md p-3 flex items-center gap-3",
        className
      )}
    >
      <div className="flex -space-x-3">
        {users.map((user, index) => (
          <div
            key={index}
            className="relative w-10 aspect-square rounded-full border-2 border-card overflow-hidden"
          >
            <Image
              src={user}
              alt={`User ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col leading-tight">
        <span className="text-md font-bold text-foreground">120K+</span>
        <span className="text-sm text-muted-foreground">Active Users</span>
      </div>
    </div>
  );
};

export default ActiveUsers;
