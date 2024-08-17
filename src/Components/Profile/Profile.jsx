import "./profile.scss";
import PropTypes from "prop-types";

const Profile = ({host}) => {
    if (!host || !host.name) {
        return null;
    }

    return (
    <div className="host">
        <div className="host__infos">
            <p>
                {host.name.split(" ")[0]}
                <br />
                {host.name.split(" ")[1]}
            </p>
            <img src={host.picture} alt={host.name} />
        </div>
    </div>
)
    }

Profile.propTypes = {
    host: PropTypes.shape({
        name: PropTypes.string,
        picture: PropTypes.string,
    })
}

export default Profile;