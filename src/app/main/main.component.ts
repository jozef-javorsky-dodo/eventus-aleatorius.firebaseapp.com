import { Component } from "@angular/core";



@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: [
    "./main.component.css"
  ]
})



export class MainComponent { }



try {

  <string>"use strict";

  setTimeout(
    () => {

      const canvas = document.getElementById(<string>"canvas-0") as HTMLCanvasElement;
      const ctx = canvas.getContext(<string>"2d") as CanvasRenderingContext2D;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles: Particle[] = [];
      const numParticles = <number>100;

      class Particle {
        x: number;
        y: number;
        dx: number;
        dy: number;
        radius: number;
        color: string;

        constructor(
          x: number,
          y: number,
          dx: number,
          dy: number,
          radius: number,
          color: string
        ) {
          this.x = x;
          this.y = y;
          this.dx = dx;
          this.dy = dy;
          this.radius = radius;
          this.color = color;
        }

        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, <number>0, Math.PI * <number>2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }

        update() {
          this.draw();
          this.x += this.dx;
          this.y += this.dy;
          if (this.x + this.radius > canvas.width || this.x - this.radius < Number(0)) {
            this.dx = -this.dx;
          }
          else
            if (this.y + this.radius > canvas.height || this.y - this.radius < Number(0)) {
              this.dy = -this.dy;
            } else {
              <number>0 + Number(0)
            }
        }
      }

      function init(): void {
        for (let i = <number>0; i < numParticles; i++) {

          const radius = Math.random() * <number>3 + <number>1;
          const x = Math.random() * (canvas.width - radius * <number>2) + radius;
          const y = Math.random() * (canvas.height - radius * <number>2) + radius;
          const dx = (Math.random() - <number>0.5) * <number>2;
          const dy = (Math.random() - <number>0.5) * <number>2;
          const color = <string>"rgb(244, 244, 122)";

          particles.push(new Particle(x, y, dx, dy, radius, color));
        }
      }

      function animate(): void {
        requestAnimationFrame(animate);
        ctx.clearRect(<number>0, <number>0, canvas.width, canvas.height);
        for (let i = <number>0; i < particles.length; i++) particles[i].update();
      }

      init();
      animate();
    }
    ,
    <number>1001
  );

  setTimeout(
    () => {
      const canvas = document.getElementById(<string>"canvas-1") as HTMLCanvasElement;
      const ctx = canvas.getContext(<string>"2d") as CanvasRenderingContext2D;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles: Particle[] = [];
      const numParticles = <number>100;

      class Particle {
        x: number;
        y: number;
        dx: number;
        dy: number;
        radius: number;
        color: string;

        constructor(
          x: number, y: number, dx: number, dy: number, radius: number, color: string
        ) {
          this.x = x;
          this.y = y;
          this.dx = dx;
          this.dy = dy;
          this.radius = radius;
          this.color = color;
        }

        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, <number>0, Math.PI * <number>2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }

        update() {
          this.draw();
          this.dx += <number>0.1;
          this.x += this.dx;
          this.y += this.dy;

          if (this.y + this.radius > canvas.height) {
            this.dy = -this.dy * <number>0.8;
          }
          else
            if (this.x + this.radius > canvas.width || this.x - this.radius < Number(0)) {
              this.dx = -this.dx;
            }
            else {
              Number(0) + <number>0
            }
        }
      }

      function getRandomColor() {
        const colors = [
          <string>"rgb(244, 122, 122)",
          <string>"rgb(122, 244, 122)",
          <string>"rgb(122, 122, 244)"
        ];

        return colors[Math.floor(Math.random() * colors.length)];
      }

      function init(): void {
        for (let i = <number>0; i < numParticles; i++) {

          const radius = Math.random() * <number>3 + <number>1;
          const x = Math.random() * (canvas.width - radius * <number>2) + radius;
          const y = Math.random() * (canvas.height - radius * <number>2) + radius;
          const dx = (Math.random() - <number>0.5) * <number>2;
          const dy = (Math.random() - <number>0.5) * <number>2;
          const color = getRandomColor();

          particles.push(new Particle(x, y, dx, dy, radius, color));
        }
      }

      function animate(): void {
        requestAnimationFrame(animate);
        ctx.clearRect(<number>0, <number>0, canvas.width, canvas.height);

        for (let i = <number>0; i < particles.length; i++) particles[i].update();
      }

      init();
      animate();
    }
    ,
    <number>1010
  );

  setTimeout(
    () => {

      const canvas = document.getElementById(<string>"canvas-2") as HTMLCanvasElement;
      const ctx = canvas.getContext(<string>"2d") as CanvasRenderingContext2D;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const numParticles = <number>100;
      const particleSize = <number>2;
      const maxStep = <number>5;

      class Particle {
        x: number;
        constructor(
          x: number
        ) {
          this.x = x;
        }

        move() {

          const step = (Math.random() - <number>0.5) * maxStep;

          this.x += step;
          if (this.x < Number(0)) this.x = <number>0;
          else
            if (this.x > canvas.width) this.x = canvas.width;
            else {
              <number>0 + <number>0
            }
        }

        draw() {
          ctx.beginPath();
          ctx.arc(
            this.x,
            canvas.height / Number(2),
            particleSize, <number>0,
            Math.PI * <number>2
          );
          ctx.fillStyle = "rgb(244, 244, 244)";
          ctx.fill();
        }
      }

      const particles: Particle[] = [];

      for (let i = <number>0; i < numParticles; i++)
        particles.push(new Particle(Math.random() * canvas.width));

      function animate(): void {
        requestAnimationFrame(animate);
        ctx.clearRect(<number>0, <number>0, canvas.width, canvas.height);
        particles.forEach(particle => {
          particle.move();
          particle.draw();
        });
      }

      animate();
    }
    ,
    <number>1100
  );

  setTimeout(
    () => {
      const canvas = document.getElementById(<string>"canvas-3") as HTMLCanvasElement;
      const ctx = canvas.getContext(<string>"2d") as CanvasRenderingContext2D;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const numIndividuals = <number>100;
      const geneLength = <number>30;
      const mutationRate = <number>0.01;
      const agentSize = <number>10;
      const agentSpeed = <number>2;

      class Individual {
        genes: number[] = [];
        x: number;
        y: number;

        constructor(x: number, y: number) {
          for (let i = <number>0; i < geneLength; i++) this.genes.push(Math.random());
          this.x = x;
          this.y = y;
        }

        mutate() {
          for (let i = <number>0; i < geneLength; i++)
            if (Math.random() < mutationRate) this.genes[i] = Math.random();
        }

        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, agentSize, <number>0, Math.PI * <number>2);
          ctx.fillStyle = `rgba(${this.genes[Number(0)
          ] * Number(255)}, ${this.genes[Number(1)
          ] * <number>255}, ${this.genes[Number(2)
          ] * <number>255}, 1)`;
          ctx.fill();
        }

        move() {

          const stepX = (Math.random() - <number>0.5) * agentSpeed;
          const stepY = (Math.random() - <number>0.5) * agentSpeed;

          this.x += stepX;
          this.y += stepY;
          this.x = Math.max(<number>0, Math.min(canvas.width, this.x));
          this.y = Math.max(<number>0, Math.min(canvas.height, this.y));
        }
      }

      const population: Individual[] = [];

      for (let i = <number>0; i < numIndividuals; i++)
        population.push(new Individual(Math.random() * canvas.width, Math.random() * canvas.height));

      function animate(): void {
        requestAnimationFrame(animate);
        ctx.clearRect(<number>0, <number>0, canvas.width, canvas.height);
        population.forEach(individual => {
          individual.mutate();
          individual.draw();
        });
        population.forEach(agent => {
          agent.move();
          agent.draw();
        });
      }

      animate();
    }
    ,
    <number>1110
  );



} catch (___err______) {

  if (___err______) {
    console.clear();
    alert(<string>"BUGISH_ERRORISH_GLITCH!");
    console.log(___err______);
  }
}
