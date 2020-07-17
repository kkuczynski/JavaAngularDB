import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetsEntity } from '../../../domain/external/pets.entity';
import { DatePipe } from '@angular/common';
import { PetsService } from 'src/app/services/pets.service';



@Component({
  selector: 'app-add-pet-dialog',
  templateUrl: './add-pet-dialog.component.html',
  styleUrls: ['./add-pet-dialog.component.css']
})
export class AddPetDialogComponent implements OnInit {

  private _adopted = 0;
  private _tmpAdopted: boolean;
  private _inputForm: FormGroup;
  private _newPet: PetsEntity;

  _pets: any;
  constructor(private petsService: PetsService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddPetDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PetsEntity) {
    this.createForm();
  }

  ngOnInit(): void {

  }

  createForm() {
    this._inputForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      spieces: ['', [
        Validators.required]],
      race: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40),
      ]],
      health: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250)]],
      age: [Number, [Validators.required, Validators.pattern('[0-9]+$')]],
      sex: ['', Validators.required],
      sterilized: [Boolean, Validators.required],
      adopted: [Boolean, Validators.required],
      adoptDate: [], // [Date],
      temporaryAdopted: [],
      tmpAdoptForDays: [] // [Number, Validators.pattern('[0-9]+$')]
    });
  }

  getInputForm() {
    return this._inputForm;
  }

  getAdopted(){
    return this._adopted;
  }

  getTmpAdopted() {
    if (this._tmpAdopted) {

      return this._tmpAdopted;
    }
    else {
      this._inputForm.get('tmpAdoptForDays').setValidators(Validators.nullValidator);
      return this._tmpAdopted;
    }
  }

  anyAdoptTrue() {
    if (this.adoptTrue() || this._tmpAdopted) {
      return true;
    }
    else {
      return false;
    }
  }

  adoptTrue() {
    if (this._adopted > 0)
    {
      return true;
    }
    else if (this._adopted < 0){
      return false;
    }
  }

  setTmpAdoptTrue() {
    this._tmpAdopted = true;
  }

  setTmpAdoptFalse() {
    this._tmpAdopted = false;
  }

  setAdoptTrue() {
    this._adopted = 1;
  }

  setAdoptFalse() {
    this._adopted = -1;
  }

  hideAddDialog() {
    this._inputForm.reset();
    this.dialogRef.close();
  }
  postPet() {
      const date = new Date();
      this._newPet = new PetsEntity();
      this._newPet.setNew(
        this._inputForm.get('name').value,
        this._inputForm.get('spieces').value,
        this._inputForm.get('race').value,
        this._inputForm.get('age').value,
        this.dateConverter(date),
        this._inputForm.get('health').value,
        this._inputForm.get('sex').value,
        this._inputForm.get('sterilized').value ? this._inputForm.get('sterilized').value : false,
        this._inputForm.get('adopted').value,
        this._inputForm.get('temporaryAdopted').value ? this._inputForm.get('temporaryAdopted').value : false,
        this._inputForm.get('adoptDate').value ? this.dateConverter(this._inputForm.get('adoptDate').value) : this.dateConverter(date),
        this._inputForm.get('tmpAdoptForDays').value ? this._inputForm.get('tmpAdoptForDays').value : 0);

      this.petsService.postNewPet(this._newPet).subscribe();
      this.dialogRef.close();
  }

  dateConverter(date: Date) {
    const datepipe = new DatePipe('en-US');
    return datepipe.transform(date, 'yyyy-MM-dd');
  }

}
