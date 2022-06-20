import { formatearFecha } from '../helpers/app'

const Resultado = ({resultado}) => {
  const fecha = resultado.created_at;
  const fechaCortada = fecha?.substring(0, 10) ?? '';

  return (
      <>
        {resultado.login && (
          <div className="resultado">
            <header className="header">
              <img 
                src={resultado.avatar_url} 
                alt={`Imagen de ${resultado.name}`} 
              />

              <div className="info-user">
                <p className="nombre-user">
                  {resultado.name ? resultado.name : 'no tiene nombre'}
                </p>
                <p className="username">
                  {`@${resultado.login}`}
                </p>

                <p className='fecha'>Se unió el {''} 
                  <span>{formatearFecha(fechaCortada)}</span>  
                </p>
              </div>  
            </header>

              <div className="bio mt-3">
                <p>{resultado.bio ? resultado.bio : 'Este usuario no tiene bio'}</p>
              </div>

              <section className="follow mt-3">
                <div className="follow-secion">
                  <p>Repos</p>
                  <span>{resultado.public_repos}</span>
                </div>
                <div className="follow-secion">
                  <p>Followers</p>
                  <span>{resultado.followers}</span>
                </div>
                <div className="follow-secion">
                  <p>Following</p>
                  <span>{resultado.following}</span>
                </div>
              </section>

              <section className="info-adicional">
                <div className="location mt-3">
                  <div className='ubicacion'>
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="11" r="3" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                    </p>

                    <p>{resultado.location ? resultado.location : 'No disponible'}</p>
                  </div>

                  <div className="blog">
                    <span className="material-symbols-outlined">
                      link
                    </span>

                    <a 
                      target='_blank'
                      href={resultado.blog ? resultado.blog : null}
                    >
                      {resultado.blog ? resultado.blog : 'No disponible'}
                    </a>
                  </div>
                </div>
                <div className="location">
                  <div className="twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                    </svg>
                    <p>
                      {resultado.twitter_username ? resultado.twitter_username : 'No disponible'}
                    </p>
                  </div>

                  <div className="company">
                  <span className="material-symbols-outlined">
                    apartment
                  </span>

                  <p>{resultado.company ? resultado.company : 'No disponible'}</p>
                  </div>
                </div>
              </section>
          </div>
        )}
      </> 
  )
}

export default Resultado