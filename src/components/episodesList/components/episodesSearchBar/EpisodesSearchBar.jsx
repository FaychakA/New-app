import React, {useState} from 'react';

const EpisodesSearchBar = ({getEpisodesBySearchParams}) => {
    const [formData, setFormData] = useState({});

    const onHandleBlur = (key, value) => {
        if (!!value) {
            setFormData({...formData, [key]: value});
        }
    };

    const onHandleSubmite = () => {
        let searchParams = "";

        for (let el in formData) {
            searchParams = searchParams + el + '=' + formData[el] + '&';
        }

        searchParams = searchParams.slice(0, -1);

        getEpisodesBySearchParams(searchParams);
    };

    return (
        <div>
            <form className="characters__form">
                <label className="characters__label">
                    <div className="characters__text">
                        Search by name:
                    </div>

                    <input
                        type="text"
                        onBlur={(event) => (onHandleBlur('name', event.target.value))}
                        placeholder="Please enter a name"
                        className="characters__input"
                        maxLength="30"
                    />
                </label>

                <label className="characters__label">
                    <div className="characters__text">
                        Search by species:
                    </div>

                    <input
                        type="text"
                        onBlur={(event) => (onHandleBlur('episode', event.target.value))}
                        placeholder="Please enter a episode code"
                        className="characters__input"
                        maxLength="30"
                    />
                </label>

                <button
                    type="button"
                    onClick={() => onHandleSubmite()}
                    className="characters__button"
                >
                    Search
                </button>
            </form>
        </div>
    )
};

export default EpisodesSearchBar;