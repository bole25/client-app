import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Room} from '../../models/room.model';
import {RoomsService} from './rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',

})

export class RoomsComponent implements OnInit {
  room: Room;
  rooms: Set<Room>;
  type: string;
  name: string;
  filteredString: string;
  filteredRooms: Set<Room>;


  constructor(private router: Router, private route: ActivatedRoute, private service: RoomsService) {
    this.room = new Room();
    this.rooms = new Set<Room>();
    this.filteredRooms = new Set<Room>();

  }

  ngOnInit() {
    this.service.getRooms().subscribe(data => {
      this.rooms = data;
    });

  }

  filterChange() {

  }

  onSubmit() {

  }
}
