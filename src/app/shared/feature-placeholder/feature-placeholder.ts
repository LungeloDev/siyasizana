import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feature-placeholder',
  standalone: true,
  templateUrl: './feature-placeholder.html',
  styleUrl: './feature-placeholder.css',
})
export class FeaturePlaceholder {
  title = '';
  description = '';
  eyebrow = '';
  audience: 'admin' | 'referrer' = 'admin';

  constructor(private route: ActivatedRoute) {
    const data = this.route.snapshot.data;

    this.title = data['title'] ?? 'Coming Soon';
    this.description =
      data['description'] ??
      'This feature is currently under development.';
    this.eyebrow =
      data['eyebrow'] ?? 'Siyasizana';
    this.audience =
      data['audience'] ?? 'admin';
  }
}