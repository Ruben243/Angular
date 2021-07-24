import { Injectable } from "@angular/core"; //permite aplicar un decorador a la clase y no tener que hacer new.Inyectas el servicio en el provider
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService {

    public peliculas: Pelicula[];
    constructor() {
        this.peliculas = [
            new Pelicula("Godzilla vs Kong", 2020, 'https://ak.uecdn.es/p/111/thumbnail/entry_id/0_gxlbsro1/width/657/type/2/bgcolor/000000/0_gxlbsro1.jpg'),

            new Pelicula("Predator (1987)", 1987, 'https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*8017*41_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5B9WD3XwV5tBgBc1rb6zq1th0DgCV%5BZZZZYwE3CQvuc8y3O03ZWqzEHugy*8kCIkuo0y%5D8YFThOvVNaB03u2t7Efo3ZZGo5yrJvndJg*xBxNkWEVmlb*gHhkFhXMZ.jpg?locale=es'),

            new Pelicula("Serpiente bajo la sombra del aguila", 1978, 'http://4.bp.blogspot.com/-ybei2KppvII/UY_QYa9sH4I/AAAAAAAABH8/mYEJl6Y-rac/s1600/GUIDE+-+Snake+in+Eagles+Shadow.jpg')

        ]
    }

    getPeliculas() {
        return this.peliculas;
    }
}