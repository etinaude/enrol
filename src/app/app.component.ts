import { ModalComponent } from './modal/modal.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface courseType {
  title: string;
  subTitle: string;
  points: number;
  description: string;
  stars: number[];
  required: boolean;
  prereq: string;
  complete: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'enrol';
  courses: courseType[] = [
    {
      title: 'DESIGN 100',
      subTitle: 'Design Methods and Processes 1',
      points: 30,
      description:
        'Introduces students to key tools, methods and processes of design planning, strategy and practice. Students learn to apply design thinking and technologies to real world contexts and issues. A course of studio–based study focused on a series of creative, hands-on projects and supported by lectures. The emphasis is on human-centred design and interventions.',
      stars: Array(5).fill(4),
      required: true,
      prereq: '',
      complete: true,
    },
    {
      title: 'DESIGN 101',
      subTitle: 'Why We Design',
      points: 15,
      description:
        'Investigates design as a driver and responder to social needs in contemporary and historic contexts. Students will understand relevant technologies and their contexts. The course explicitly considers planetary limits and sustainability, as well as design and business considered in a social-technological, tikanga Māori, financial, cultural-ethical and environmental context.',
      stars: Array(4).fill(4),
      required: true,
      prereq: '',
      complete: true,
    },
    {
      title: 'DESIGN 200',
      subTitle: 'Design Methods and Processes 2',
      points: 30,
      description:
        'An intermediate studio-based programme in which students develop a customised design strategy in response to a real-world issue. By working on a detailed case study, students learn to address local issues and engage with the local design community. Students present their design solutions, and learn to pitch design concepts and evaluate potential outcomes.',
      stars: Array(2).fill(4),
      required: true,
      prereq: 'Prerequisite: DESIGN 100, 101',
      complete: false,
    },
    {
      title: 'DESIGN 201',
      subTitle: 'Creative Communities',
      points: 15,
      description:
        'Students analyse and discuss the ‘design difference’ by understanding design as both problem and (potential) solution to one or more identified social issues. Attention is paid to the economic and ethical implications of design with emphasis on value chains and Triple Bottom Line practices.',
      stars: Array(1).fill(4),
      required: true,
      prereq: 'Prerequisite: DESIGN 100, 101',
      complete: false,
    },
  ];

  constructor(public dialog: MatDialog) {}

  showModal(course: any) {
    const dialogRef = this.dialog.open(ModalComponent, { data: course });
  }
}
