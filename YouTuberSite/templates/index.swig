﻿{% extends 'layout.swig' %}

{% block title %}Yotuber Site| Home{% endblock %}

{% block head %}
<script type="text/javascript" src="js/load-videos.js"></script>
{% endblock %}

{% block content %}
<div class="clearfix">
  <ul id="videoList">
    {% for video in videos %}
    <a href="{{video.url}}">
      <li class="vid-item">
        <img width="100%" src="{{video.thumbnailUrl}}"></img>
        <h3>{{video.name}}</h3>
      </li>
    </a>
    {% endfor %}
  </ul>
  {% if video %}
    <button id='loadBtn' next-page="{{nextpage}}"> LOAD MORE </button>
  {% endif %}
</div>
{% endblock %}