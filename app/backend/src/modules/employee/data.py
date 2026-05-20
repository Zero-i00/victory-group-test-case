from collections.abc import Sequence

from .schema import EmployeeSchema, StaffSchema

mock_employee_table: Sequence[EmployeeSchema] = [
    EmployeeSchema(
        id=1,
        photo="/static/employees/employee1.webp",
        full_name="Арзумаров Амаяк Аркадьевич",
        description="Ведущий специалист клиники по съемному и несъемному протезированию",
        staff=StaffSchema(id=1, title="Врач-стоматолог ортопед, гнатолог"),
    ),
    EmployeeSchema(
        id=2,
        photo="/static/employees/employee2.webp",
        full_name="Жвания Нала Анзоровна",
        description="Специалист по ортодонтическому лечению на всех видах брекет-систем взрослых и детей с 12 лет",
        staff=StaffSchema(id=2, title="Врач-стоматолог ортодонт"),
    ),
    EmployeeSchema(
        id=3,
        photo="/static/employees/employee3.webp",
        full_name="Арзуманов Андраник Аркадьевич",
        description="Специалист по ортодонтическому лечению на брекет-системах и элайнерах",
        staff=StaffSchema(id=2, title="Врач-стоматолог ортодонт"),
    ),
    EmployeeSchema(
        id=4,
        photo="",
        full_name="Петрова Елена Сергеевна",
        description="Специалист в области терапевтической стоматологии, эстетической реставрации и лечения заболеваний пародонта",
        staff=StaffSchema(id=3, title="Врач-стоматолог терапевт"),
    ),
    EmployeeSchema(
        id=5,
        photo="",
        full_name="Кириллов Дмитрий Олегович",
        description="Опытный хирург-имплантолог, специализирующийся на дентальной имплантации и сложных случаях удаления зубов",
        staff=StaffSchema(id=4, title="Врач-стоматолог хирург, имплантолог"),
    ),
    EmployeeSchema(
        id=6,
        photo="",
        full_name="Захарова Мария Викторовна",
        description="Специалист по детской стоматологии, лечению и профилактике кариеса у детей, а также подготовке маленьких пациентов к плановым процедурам",
        staff=StaffSchema(id=5, title="Врач-стоматолог детский"),
    ),
]
