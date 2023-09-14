import { Outlet } from "react-router-dom";
import { Home } from "../pages";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Root() {
    return (
        <>
            <Header title="Smoothie Builder" />

            <Content>
                <Outlet />
                {/* <Home /> */}
            </Content>

            <Footer title="Smoothie Builder" />
        </>
    );
}