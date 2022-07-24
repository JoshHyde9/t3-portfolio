import dayjs from "dayjs";

export interface GuestBook {
  id?: string;
  username: string;
  comment: string;
  createdAt?: Date;
}

const Guest = (guest: GuestBook) => {
  return (
    <div className="pb-4 w-full">
      <div className="flex flex-row justify-between">
        <div className="w-2/3">
          <p className="text-lg">{guest.comment}</p>
          <h1 className="text-xl text-purple-300">
            <span className="italic">&#8211; </span>
            {guest.username}
          </h1>
        </div>
        <p className="text-sm text-neutral-400">
          {dayjs(guest.createdAt).format("DD/MM/YYYY - HH:mm")}
        </p>
      </div>
    </div>
  );
};
export default Guest;
