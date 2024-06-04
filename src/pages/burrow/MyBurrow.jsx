import { useDispatch, useSelector } from "react-redux";

import { MyBurrowTable } from "../../components/bookTable/MyBurrowTable";
import { UserLayout } from "../../components/layout/UserLayout";
import { fetchBurrowsAction } from "../../features/burrows/burrowAction";
import { useEffect } from "react";

export const MyBurrow = () => {
  const dispatch = useDispatch();
  const { burrows } = useSelector((state) => state.burrowInfo);

  useEffect(() => {
    dispatch(fetchBurrowsAction());
  }, [dispatch]);

  return (
    <UserLayout pageTitle={"My Burrow List"}>
      <MyBurrowTable burrows={burrows} />
    </UserLayout>
  );
};
