import { prefix } from "@/prefix";

const Loader = () => {
    return (
        <div id="preload" style={{ display: "none" }}>
            <img src={`${prefix}/image/logo-icon.png`} alt="" />
        </div>
    );
};

export default Loader;
