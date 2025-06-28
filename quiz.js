<div style="font-family: Arial; background: #f3f3f3; padding: 20px;">
  <div style="background: white; padding: 20px; border-radius: 10px; max-width: 500px; margin: auto; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    <div style="font-size: 1.2em; margin-bottom: 20px;" id="question">Cargando pregunta...</div>
    <div>
      <button style="margin: 5px; padding: 10px 20px; border: none; border-radius: 5px; font-weight: bold; background: #4CAF50; color: white;" onclick="checkAnswer('esencial')">Esencial</button>
      <button style="margin: 5px; padding: 10px 20px; border: none; border-radius: 5px; font-weight: bold; background: #607d8b; color: white;" onclick="checkAnswer('accidental')">Accidental</button>
      <button style="margin: 5px; padding: 10px 20px; border: none; border-radius: 5px; font-weight: bold; background: #f44336; color: white;" onclick="checkAnswer('ninguno')">Nada que ver</button>
    </div>
    <p id="feedback"></p>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/gh/nicolastienda/admin-quiz/quiz.js"></script>
