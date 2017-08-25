
import { People }  from '../People/People';
import { Planet }  from '../Planet/Planet';
import { Species }  from '../Species/Species';



export class ObjectConverter {


  public convertResponseToPeople(r:any): People{

    let people = <People>({
      birth_year: r.birth_year,
      eye_color: r.eye_color,
      openingCrawl: r.openingCrawl,
      gender: r.gender,
      hair_color: r.hair_color,
      height: r.height,
      homeworld: r.homeworld,
      mass: r.mass,
      name: r.name,
      skin_color: r.skin_color,
      created: r.created,
      edited: r.edited,
    });

    return people;
  };

  public convertResponseToPlanet(r:any): Planet{

    let planet = <Planet>({
      name: r.name,
      rotation_period: r.rotation_period,
      orbital_period: r.orbital_period,
      diameter: r.diameter,
      terrain: r.terrain,
      climate: r.climate,
      gravity: r.gravity,
      surface_water: r.surface_water,
      population: r.population,
    });

    return planet;
  };

  public convertResponseToSpecies(r:any): Species{

    let species = <Species>({
      average_height: r.average_height,
      average_lifespan: r.average_lifespan,
      classification: r.classification,
      created: r.created,
      designation: r.designation,
      edited: r.edited,
      eye_colors: r.eye_colors,
      hair_colors: r.hair_colors,
      homeworld: r.homeworld,
      language: r.language,
      name: r.name,
      skin_colors: r.skin_colors
    });

    return species;
  };




}
