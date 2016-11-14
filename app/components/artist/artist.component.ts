import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { SearchService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit{
	id: string;
	artist: Artist[];
	albums: Album[];

	constructor(private _searchService:SearchService,
				private _route:ActivatedRoute){

	}

	ngOnInit(){
		this._route.params
			.map(params => params['id'])
			.subscribe((id) =>{
				this._searchService.getArtist(id)
					.subscribe(artist => {
						this.artist = artist;
					})
				this._searchService.getAlbums(id)
					.subscribe(albums => {
						this.albums = albums.items;
					})
			});
	}
	
 }







