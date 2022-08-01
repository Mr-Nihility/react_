// import Section from './section/Section';
// import { FeaturesGallary } from './featuresGallary/FeaturesGallary';
import { mapper } from 'utils/mapper';
import { useEffect, useState, useRef } from 'react';
import { Button } from './Button/Button';
import { MoviesGallary } from './MoviesGallary/MoviesGallary';
import { Modal } from './Modal/Modal';
import { service } from './ServiceApi/service';
import { Loader } from './Loader/Loader';
import { getMovieDetails } from './ServiceApi/service';

// import data from '../data/features.json';
//-------------------------------------------------------///

const App = () => {
  const [films, setFilms] = useState([]);

  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const isFirstLoad = useRef(true);

  useEffect(() => {
    console.log('123');
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    setLoading(true);
    service(page)
      .then(({ data }) => {
        setFilms(prev => [...prev, ...mapper(data.results)]);
      })
      .finally(() => setLoading(false));
  }, [page]);

  // const handlerClick = () => {
  //   setIsShown(true);
  //   // fetchMovies();
  // };

  // const fetchMovies = () => {
  //   setLoading(true);
  //   service(page)
  //     .then(({ data }) => {
  //       setFilms(prev => [...prev, ...mapper(data.results)]);
  //     })
  //     .finally(() => setLoading(false));
  // };

  const handleOpenModal = id => {
    // setData(id);
    getMovieDetails(id).then(({data: {original_title, popularity, release_date}})=>{
      
      setData({original_title, popularity, release_date})
    }
      )

  };
  const handleCloseModal = () => {
    setData(null);
  };

  const onToggleStatus = filmId => {
    setFilms(prev =>
      prev.map(item => {
        if (item.id === filmId) {
          return { ...item, watched: !item.watched };
        }
        return item;
      })
    );
  };

  const onDelete = id => {
    setFilms(prev => prev.filter(item => item.id !== id));
  };
  const handlerLoadMore = () => {
    setPage(ps => ps + 1);
  };

  return (
    <div>
      <>
        <MoviesGallary
          handleOpenModal={handleOpenModal}
          onToggleStatus={onToggleStatus}
          films={films}
          onDelete={onDelete}
        />
        {loading && <Loader />}
        <Button textContent="Load More" handlerClick={handlerLoadMore} />
      </>

      {data && <Modal close={handleCloseModal} data={data} />}
    </div>
  );
};

// const App = () => {
//   const [films, setFilms] = useState([]);
//   const [isShown, setIsShown] = useState(false);
//   const [image, setImage] = useState('');
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   // const isFirstLoad = useRef(true);

//   useEffect(() => {
//     console.log('123');
//     if (!isShown) {
//       return;
//     }

//     setLoading(true);
//     service(page)
//       .then(({ data }) => {
//         setFilms(prev => [...prev, ...mapper(data.results)]);
//       })
//       .finally(() => setLoading(false));
//   }, [page, isShown]);

//   const handlerClick = () => {
//     setIsShown(true);
//     // fetchMovies();
//   };

//   // const fetchMovies = () => {
//   //   setLoading(true);
//   //   service(page)
//   //     .then(({ data }) => {
//   //       setFilms(prev => [...prev, ...mapper(data.results)]);
//   //     })
//   //     .finally(() => setLoading(false));
//   // };

//   const handleOpenModal = img => {
//     setImage(img);
//   };
//   const handleCloseModal = () => {
//     setImage('');
//   };

//   const onToggleStatus = filmId => {
//     setFilms(prev =>
//       prev.map(item => {
//         if (item.id === filmId) {
//           return { ...item, watched: !item.watched };
//         }
//         return item;
//       })
//     );
//   };

//   const onDelete = id => {
//     setFilms(prev => prev.filter(item => item.id !== id));
//   };
//   const handlerLoadMore = () => {
//     setPage(ps => ps + 1);
//   };

//   return (
//     <div>
//       {!isShown && (
//         <Button textContent="Show something" handlerClick={handlerClick} />
//       )}

//       {isShown && (
//         <>
//           <MoviesGallary
//             handleOpenModal={handleOpenModal}
//             onToggleStatus={onToggleStatus}
//             films={films}
//             onDelete={onDelete}
//           />
//           {loading && <Loader />}
//           <Button textContent="Load More" handlerClick={handlerLoadMore} />
//         </>
//       )}
//       {image && <Modal image={image} close={handleCloseModal} />}
//     </div>
//   );
// };

// class App extends Component {
//   state = {
//     films: [],
//     isShown: false,
//     image: '',
//     page: 1,
//     loading: false
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if(prevState.page !== this.state.page) {
//       this.fetchMovies()
//     }
//   }

//   fetchMovies = () => {
//     this.setState({loading: true})
//     service(this.state.page).then(({data}) => {this.setState((ps) =>({films : [...ps.films, ...mapper(data.results)]}))})
//     .finally(() => this.setState({loading: false}))
//   }

//   handleOpenModal = (img) => {
//   this.setState({image:img})
//   }
//   handleCloseModal = () => {
//   this.setState({image:''})
//   }

//   handlerClick = () => {
//     this.setState({ isShown: true });
//     this.fetchMovies()
//   };
//   onDelete = id => {
//     this.setState(prevState => ({
//       films: prevState.films.filter(item => item.id !== id),
//     }));
//   };

//   handlerLoadMore = () => {
//     this.setState((ps) => ({page: ps.page + 1 }))
//   }

//   onToggleStatus = filmId => {

//     this.setState(prev => ({

//       films: prev.films.map(item => {

//         if (item.id === filmId) {

//           return {...item, watched: !item.watched}

//         }
//         return item
//       }),
//     }));
//   };

//   render() {
//     const { isShown, films,image, loading } = this.state;
//     return (
//       <div>
//         {!isShown && (
//           <Button
//             textContent="Show something"
//             handlerClick={this.handlerClick}
//           />
//         )}

//         {isShown && (
//           <>
//           <MoviesGallary
//             handleOpenModal={this.handleOpenModal}
//             onToggleStatus={this.onToggleStatus}
//             films={films}
//             onDelete={this.onDelete}
//           />
//           {loading && (<Loader/>)}
//           <Button
//             textContent="Load More"
//             handlerClick={this.handlerLoadMore}
//           />
//           </>
//         )}
//         {image && (
//           <Modal image={image} close={this.handleCloseModal } />
//         )}

//       </div>
//     );
//   }
// }

export { App };
