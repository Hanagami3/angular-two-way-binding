import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // @Input({required: true}) size!: {width: string; height: string}
  // //IL DOIT être nommé de la même manière avec change à la fin pour que angular le reconnaisse
  // @Output() sizeChange = new EventEmitter<{width: string; height: string}>();
 
  // onReset() {
  //   this.sizeChange.emit({
  //     width: '200',
  //     height: '100'
  //   })
  // }

  size = model.required<{width: string; height: string}>()

  onReset(){
    //fonctionne aussi .update()
    this.size.set({
      width: '200',
      height: '100'
    })
  }
}
