"use client";

import { useGetUser } from "../../../../hooks/useUser";

export default function Page() {
  const { data } = useGetUser();

    console.log(data);

  return (
    <div>
      Hello {data?.first_name} {data?.last_name}
    </div>
  );
}
