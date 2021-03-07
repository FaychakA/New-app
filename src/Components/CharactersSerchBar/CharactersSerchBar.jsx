import React, {useState} from 'react';

const CharactersSearchBar = ({getCharacterBySearchParams}) => {
    const [formData, setFormData] = useState({});

    const onHandleBlur = (key, value) => {
        if (value == "Select gender" || value == "Select status") {
            delete formData[key];

            setFormData({...formData});

            return;
        };

        if (!!value) {
            setFormData({...formData, [key]: value});
        };
    };

    const onHandleSubmite = () => {
        let searchParams = "";

        for (let el in formData) {
            searchParams = searchParams + el + '=' + formData[el] + '&';
        }
        ;

        searchParams = searchParams.slice(0, -1);

        console.log(searchParams, 'searchParams');

        getCharacterBySearchParams(searchParams);
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
                        onBlur={(event) => (onHandleBlur('species', event.target.value))}
                        placeholder="Please enter a species"
                        className="characters__input"
                        maxLength="30"
                    />
                </label>

                <label className="characters__label">
                    <div className="characters__text">
                        Search by type:
                    </div>

                    <input
                        type="text"
                        onBlur={(event) => (onHandleBlur('type', event.target.value))}
                        placeholder="Please enter a type"
                        className="characters__input"
                        maxLength="30"
                    />
                </label>

                <select
                    onBlur={(event) => (onHandleBlur('status', event.target.value))}
                    name="status select"
                    className="characters__select"
                >
                    <option>Select status</option>
                    <option>alive</option>
                    <option>dead</option>
                    <option>unknown</option>
                </select>

                <select
                    onBlur={(event) => (onHandleBlur('gender', event.target.value))}
                    name="gender select"
                    className="characters__select"
                >
                    <option>Select gender</option>
                    <option>female</option>
                    <option>male</option>
                    <option>genderless</option>
                    <option>unknown</option>
                </select>

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

export default CharactersSearchBar;