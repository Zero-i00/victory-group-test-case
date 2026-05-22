from collections.abc import Sequence

from .schema import EmployeeSchemaOut, StaffSchemaOut

mock_employee_table: Sequence[EmployeeSchemaOut] = [
    EmployeeSchemaOut(
        id=1,
        photo="/static/employees/employee1.webp",
        full_name="Арзумаров Амаяк Аркадьевич",
        description="Ведущий специалист клиники по съемному и несъемному протезированию",
        staff=StaffSchemaOut(id=1, title="Врач-стоматолог ортопед, гнатолог"),
    ),
    EmployeeSchemaOut(
        id=2,
        photo="/static/employees/employee2.webp",
        full_name="Жвания Нала Анзоровна",
        description="Специалист по ортодонтическому лечению на всех видах брекет-систем взрослых и детей с 12 лет",
        staff=StaffSchemaOut(id=2, title="Врач-стоматолог ортодонт"),
    ),
    EmployeeSchemaOut(
        id=3,
        photo="/static/employees/employee3.webp",
        full_name="Арзуманов Андраник Аркадьевич",
        description="Специалист по ортодонтическому лечению на брекет-системах и элайнерах",
        staff=StaffSchemaOut(id=2, title="Врач-стоматолог ортодонт"),
    ),
    EmployeeSchemaOut(
        id=4,
        photo="/static/employees/employee2.webp",
        full_name="Петрова Елена Сергеевна",
        description="Специалист в области терапевтической стоматологии, эстетической реставрации и лечения заболеваний пародонта",
        staff=StaffSchemaOut(id=3, title="Врач-стоматолог терапевт"),
    ),
    EmployeeSchemaOut(
        id=5,
        photo="/static/employees/employee3.webp",
        full_name="Кириллов Дмитрий Олегович",
        description="Опытный хирург-имплантолог, специализирующийся на дентальной имплантации и сложных случаях удаления зубов",
        staff=StaffSchemaOut(id=4, title="Врач-стоматолог хирург, имплантолог"),
    ),
    EmployeeSchemaOut(
        id=6,
        photo="/static/employees/employee2.webp",
        full_name="Захарова Мария Викторовна",
        description="Специалист по детской стоматологии, лечению и профилактике кариеса у детей, а также подготовке маленьких пациентов к плановым процедурам",
        staff=StaffSchemaOut(id=5, title="Врач-стоматолог детский"),
    ),
]
