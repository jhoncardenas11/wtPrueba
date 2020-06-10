import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

declare var M: any;

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {

  loader = false;

  formData = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  });

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  sendData() {
    this.loader = true;
    const dataToSend = {
      title: this.formData.value.title,
      body: this.formData.value.body
    }
    this.usersService.createUser(dataToSend).subscribe((data) => {
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Datos enviados con exito'
      })
      this.loader = false;
      this.formData.reset();
      M.updateTextFields();
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Datos no enviados',
      })
    });
  }

}
