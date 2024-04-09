console.log('Hi prof, I used fetch API to load content from a JSON file dynamically into HTML')

fetch("assets/data/data.json")
  .then(response => response.json())
  .then(data => {
    // Update data container numbers
    document.querySelector('.unresolved').textContent = data.dataContainer.unresolved;
    document.querySelector('.overdue').textContent = data.dataContainer.overdue;
    document.querySelector('.open').textContent = data.dataContainer.open;
    document.querySelector('.on-hold').textContent = data.dataContainer.onHold;
    
    // Update chart numbers
    document.querySelector('.resolved-value').textContent = data.chart.resolved;
    document.querySelector('.received-value').textContent = data.chart.received;
    document.querySelector('.avg-first-response-value').textContent = data.chart.avgFirstResponseTime;
    document.querySelector('.avg-response-value').textContent = data.chart.avgResponseTime;
    document.querySelector('.resolution-sla-value').textContent = data.chart.resolutionWithinSLA;

   // Update left table numbers
   document.querySelector('.waiting-feature-request').textContent = data.leftTable.waitingFeatureRequest;
   document.querySelector('.awaiting-customer-response').textContent = data.leftTable.awaitingCustomerResponse;
   document.querySelector('.awaiting-developer-fix').textContent = data.leftTable.awaitingDeveloperFix;
   document.querySelector('.pending').textContent = data.leftTable.pending;

   // Update right table text
   document.querySelector('.task1').textContent = data.rightTable.task1;
   document.querySelector('.task2').textContent = data.rightTable.task2;
   document.querySelector('.task3').textContent = data.rightTable.task3;
  })
  .catch(error => console.log("Error fetching data:", error));