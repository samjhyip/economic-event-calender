document.addEventListener('DOMContentLoaded', function () {
    const eventsList = document.getElementById('events-list');
    const countryFilter = document.getElementById('country-filter');
    const timezoneFilter = document.getElementById('timezone-filter');

    // Sample data, replace this with your API or data source
    const events = [
        { id: 1, country: 'USA', timezone: 'UTC-5', title: 'US GDP Report', date: '2024-08-05' },
        { id: 2, country: 'Germany', timezone: 'UTC+1', title: 'Germany Inflation Rate', date: '2024-08-06' },
        // Add more events
    ];

    function populateFilters() {
        const countries = [...new Set(events.map(event => event.country))];
        const timezones = [...new Set(events.map(event => event.timezone))];

        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            countryFilter.appendChild(option);
        });

        timezones.forEach(timezone => {
            const option = document.createElement('option');
            option.value = timezone;
            option.textContent = timezone;
            timezoneFilter.appendChild(option);
        });
    }

    function displayEvents(filteredEvents) {
        eventsList.innerHTML = '';
        filteredEvents.forEach(event => {
            const eventItem = document.createElement('div');
            eventItem.className = 'event';
            eventItem.innerHTML = `<h2>${event.title}</h2><p>${event.country} - ${event.timezone}</p><p>${event.date}</p>`;
            eventsList.appendChild(eventItem);
        });
    }

    function filterEvents() {
        const selectedCountry = countryFilter.value;
        const selectedTimezone = timezoneFilter.value;
        
        const filteredEvents = events.filter(event => {
            return (selectedCountry === 'all' || event.country === selectedCountry) &&
                   (selectedTimezone === 'all' || event.timezone === selectedTimezone);
        });

        displayEvents(filteredEvents);
    }

    countryFilter.addEventListener('change', filterEvents);
    timezoneFilter.addEventListener('change', filterEvents);

    populateFilters();
    displayEvents(events);
});
