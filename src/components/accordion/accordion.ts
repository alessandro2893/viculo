import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';
import {GUIAS} from "../../data/data.guias";
// import { CONTENIDOPRINCIPAL} from "../../data/data.contenidoprin";
import {Contenido} from "../../interfaces/contenido.interface";


/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit{

  accordionExpanded= false;
  @ViewChild("cc") cardContent: any;
  // @Input('title') title: string;
  // @Input('texto') img: string;

  icon: string="arrow-forward";

  guias: any[] =[];

contenidos:Contenido[]=[];

  constructor(public renderer: Renderer) {


// this.contenidos=CONTENIDOPRINCIPAL.slice(0);


// this.guias = GUIAS;
// console.log(this.guias);
  }

  ngOnInit(){
    console.log(this.cardContent.nativeElement);
    this.renderer.setElementStyle(this.cardContent.nativeElement,"webkitTransition", "max-height 500ms, padding 500ms");
  }

  toggleAccordion(){
    if(this.accordionExpanded){
        this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
          this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");

    }else{
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");

    }

    this.accordionExpanded =!this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }

}
