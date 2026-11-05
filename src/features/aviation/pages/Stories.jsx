const imagePath = (filename) => `${import.meta.env.BASE_URL}imagenes/${filename}`

const people = [
    {
        name: 'Avión de combate histórico',
        image: imagePath('avion-1.jpg'),
        size: 100,
    },
    {
        name: 'Caza P-51',
        image: imagePath('avion-2.jpg'),
        size: 80,
    },
    {
        name: 'Biplano naval',
        image: imagePath('avion-3.jpg'),
        size: 50,
    },
]

function Avatar({ person, size }) {
    return (
        <img
            className="rounded-circle object-fit-cover"
            src={person.image}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}

export const Props = () => (
    <section className="container py-5">
        <div className="d-flex flex-wrap flex-row align-items-center justify-content-center gap-4">
            {people.map((person) => (
                <Avatar key={person.name} person={person} size={person.size} />
            ))}
        </div>
    </section>
)
