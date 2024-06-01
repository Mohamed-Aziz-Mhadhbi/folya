import { prefix } from "@/prefix";

const Loader = () => {
    return (
        <div className="loader">
            <div className="loader-icon">
                <img src={`${prefix}/logo-icon.png`} alt="image" />
            </div>
        </div>
    );
};

export default Loader;
