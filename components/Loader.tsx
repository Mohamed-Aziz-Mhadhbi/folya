import { prefix } from "@/prefix";

const Loader = () => {
    return (
        <div className="loader">
            <div className="loader-icon">
                <img src={`${prefix}/image/logo-icon.png`} alt="image" />
            </div>
        </div>
    );
};

export default Loader;
