import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { authState, offInitializiing } from "@/redux/features/authSlice/auth.slice";
import { getProfile } from "@/redux/features/authSlice/auth.action";

export function withAuth(Component: any) {
  return function WithAuth(props: any) {
    const router = useRouter();
    const dispatch: any = useDispatch();
    const authData = useSelector((state: any) => state.auth);

    const { initializing, authenticated } = authData;
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
      async function loadUser() {
        const token = localStorage.getItem("access_token");
        if (token) await dispatch(getProfile());
        dispatch(offInitializiing());
      }
      loadUser();
    }, [dispatch]);

    useEffect(() => {
      if (!authenticated && !initializing) router.push("/login");
      if (authenticated && !initializing) setIsLoading(false);
    }, [authenticated, initializing, router]);

    if (isLoading) return <div>Loading...</div>;

    return <Component {...props} />;
  };
}

export function withoutAuth(Component: any) {
  return function WithoutAuth(props: any) {
    const router = useRouter();
    const dispatch: any = useDispatch();
    const authData: authState = useSelector((state: any) => state.auth);

    const { initializing, authenticated } = authData;
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
      async function loadUser() {
        const token = localStorage.getItem("access_token");
        if (token) await dispatch(getProfile());
        dispatch(offInitializiing());
      }
      loadUser();
    }, [dispatch]);

    useEffect(() => {
      if (authenticated && !initializing) router.push("/");
      if (!authenticated && !initializing) setIsLoading(false);
    }, [authenticated, initializing, router]);

    if (isLoading) return <div>Loading...</div>;

    return <Component {...props} />;
  };
}
