import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MediBotService } from '../medi-bot.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Contains *ngIf, *ngFor
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HomeComponent implements OnInit {
  hasSearchedBefore = false;
  isloading = false;
  rishi: string = '';
  apires = '';
  data: { user: string, bot: string }[] = [];

  @ViewChild('chatBox') private chatBox!: ElementRef;

  constructor(private as: MediBotService) {}

  ngOnInit(): void {
    const input = document.getElementById('myInput') as HTMLInputElement;
    if (input) {
      input.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          this.sendToApi();
        }
      });
    }
  }

  sendToApi(): void {
    if (!this.rishi.trim()) return;

    this.isloading = true;

    this.as.medc(this.rishi).subscribe({
      next: (res: any) => {
        this.apires = res.candidates[0]?.content?.parts[0]?.text || 'No response';
        this.data.push({ user: this.rishi, bot: this.apires });
        this.rishi = '';
        this.hasSearchedBefore = true;
        this.scrollToBottom();
      },
      error: (err) => {
        console.error('API error:', err);
        this.apires = 'An error occurred. Please try again.';
        this.data.push({ user: this.rishi, bot: this.apires });
        this.isloading = false;
        this.hasSearchedBefore = true;
        this.rishi = '';
        this.scrollToBottom();
      },
      complete: () => {
        this.isloading = false;
      }
    });
  }

  scrollToBottom(): void {
    try {
      setTimeout(() => {
        this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
      }, 100);
    } catch (err) {
      console.error('Scroll failed:', err);
    }
  }
}

// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common'; // Contains *ngIf, *ngFor
// import { HttpClientModule } from '@angular/common/http';
// import { MediBotService } from '../medi-bot.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css'],
//   standalone: true, // ← This means it's a standalone component
//   imports: [
//     CommonModule,
//     FormsModule,
//     HttpClientModule
//   ]
// })
// export class HomeComponent implements OnInit {
//   hasSearchedBefore = false;
//   isloading = false;
//   rishi: string = '';
//   apires = '';
//   data: { user: string, bot: string }[] = [];

//   @ViewChild('chatBox') private chatBox!: ElementRef;

//   constructor(private as: MediBotService) {}

//   ngOnInit(): void {
//     const input = document.getElementById('myInput') as HTMLInputElement;
//     if (input) {
//       input.addEventListener('keydown', (event: KeyboardEvent) => {
//         if (event.key === 'Enter') {
//           event.preventDefault();
//           this.sendToApi();
//         }
//       });
//     }
//   }

//   sendToApi(): void {
//     if (!this.rishi.trim()) return;

//     this.isloading = true;

//     this.as.medc(this.rishi).subscribe({
//       next: (res: any) => {
//         this.apires = res.candidates[0]?.content?.parts[0]?.text || 'No response';
//         this.data.push({ user: this.rishi, bot: this.apires });
//         this.rishi = '';
//         this.hasSearchedBefore = true;
//         this.scrollToBottom();
//       },
//       error: (err) => {
//         console.error('API error:', err);
//         this.apires = 'An error occurred. Please try again.';
//         this.data.push({ user: this.rishi, bot: this.apires });
//         this.isloading = false;
//         this.hasSearchedBefore = true;
//         this.rishi = '';
//         this.scrollToBottom();
//       },
//       complete: () => {
//         this.isloading = false;
//       }
//     });
//   }

//   scrollToBottom(): void {
//     try {
//       setTimeout(() => {
//         this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
//       }, 100);
//     } catch (err) {
//       console.error('Scroll failed:', err);
//     }
//   }
// }
