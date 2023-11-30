import style from './InputMembers.module.css';

const InputMembers = ({name, age, description, image, github, instagram, setName, setAge, setDescription, setImage, setGithub, setInstagram}) => {
    return (
        <>
                <h3 className={style.form__title}>Adicionar Membro</h3>
                <div className={style.form__container}>
                    <input
                        type="name"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Idade"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Imagem"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Github"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Instagram"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                    />
                </div>
        </>
    )
}

export default InputMembers;